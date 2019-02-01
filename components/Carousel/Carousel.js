class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.rightButton = this.carousel.querySelector('.right-button');
        this.leftButton = this.carousel.querySelector('.left-button');
        this.imgList = this.carousel.querySelectorAll('img');
        this.currentImageIndex = 0;
        this.currentImage = this.imgList[this.currentImageIndex];
        this.currentImage.style.display = 'block';
        this.rightButton.addEventListener('click', () => this.carouselRight());
        this.leftButton.addEventListener('click', () => this.carouselLeft());
    }

    carouselRight(){
        console.log('testR');
        this.currentImageIndex++;
        this.currentImage.style.display = 'none';
        if(this.currentImageIndex > (this.imgList.length -1)) {
            this.currentImageIndex = 0;
            this.currentImage = this.imgList[this.currentImageIndex];
            this.currentImage.style.display = 'block';    
        } else {
            this.currentImage = this.imgList[this.currentImageIndex];
            this.currentImage.style.display = 'block';    
        }
    };
    carouselLeft(){
        console.log('testL');
        this.currentImageIndex--;
        this.currentImage.style.display = 'none';
        if(this.currentImageIndex < 0) {
            this.currentImageIndex = this.imgList.length -1;
            this.currentImage = this.imgList[this.currentImageIndex];
            this.currentImage.style.display = 'block';    
        } else {
            this.currentImage = this.imgList[this.currentImageIndex];
            this.currentImage.style.display = 'block';    
        }
    };
}

const carousel = document.querySelectorAll('.carousel').forEach((carousel) => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

