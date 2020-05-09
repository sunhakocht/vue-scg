<template>
  <div style="display: block; height: 600px; width: 1024px; margin: 0 auto;">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="30000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="600"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="DOSCG controllers and models"
        text="Create a controller and model named doscg"
        img-src="../assets/ctrlModel.png"
      >
      </b-carousel-slide>

      <b-carousel-slide
        caption="Given X, Y, 5, 9, 15, 23, Z"
        text="Create a function for finding X, Y, Z value"
        img-src="../assets/xyz.png"
      >
        <div>
          <b-button block variant="primary" href="/getXYZ">Answer</b-button>
        </div>
      </b-carousel-slide>

      <b-carousel-slide
        caption="Given A = 21, A + B = 23, A + C = -21"
        text="Create a function for finding B and C value"
        img-src="../assets/bc.png"
      >
        <div>
          <b-button block variant="primary" href="/getBC">Answer</b-button>
        </div>
      </b-carousel-slide>

      <b-carousel-slide
        caption="Find the best way from SCG Bangsue to Central World"
        text="Using Google Map Direction Api"
        img-src="../assets/direction.png"
      >
        <div>
          <b-button block variant="primary" href="/getDirection">Answer</b-button>
        </div>
      </b-carousel-slide>

      <b-carousel-slide
        caption="Notify with line notification when the Line Bot can not answer a
           question more than 10 second by Line messaging API"
        img-blank
        img-alt="Blank image"
      >
        <b-embed
          type="iframe"
          aspect="16by9"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4DJcGg5NSP8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></b-embed>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'DoSCG',
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

