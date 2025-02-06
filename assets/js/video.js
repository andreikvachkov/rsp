const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const frames = {
    currentIndex: 0,
    maxIndex: 382,
};

let imagesLoaded = 0;
const images = []; // to save all the images which are loaded

const preloadImages = () => {
    for(let i = 1; i <= frames.maxIndex; i++) {
        const imageURL = `../images/frames/video_${i.toString().padStart(6, '0')}.jpg`
        // console.log(imageURL);
        const img = new Image();
        img.src = imageURL;
        // console.log(img);

        img.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === frames.maxIndex) {
                loadImage(frames.currentIndex);
                // console.log('All images loaded');
                startAnimation();
            }
        }
        images.push(img);
    }
}


const loadImage = (index) => {
    if(index >= 0 && index <= frames.maxIndex)  {
        const img = images[index];
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;
        
        const scale = Math.max(scaleX, scaleY);
        
        const newWidth = img.width * scale;
        const newHeight = img.height * scale;
        
        // to center the image inside the canvas
        const offsetX = (canvas.width - newWidth) / 2;
        const offsetY = (canvas.height - newHeight) / 2;
        
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
        frames.currentIndex = index;
    }
}

gsap.registerPlugin(ScrollTrigger);

const startAnimation = () => {
    let t1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.parent',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
            markers: false,
        }
    });

    t1.to(frames, {
        currentIndex: frames.maxIndex,
        onUpdate: function() {
            loadImage(Math.floor(frames.currentIndex));
        }
    })
}

preloadImages();