<template>
  <div id="body" style="padding: 20px">
    <h1 style="margin-left: 40px;">{{question}}</h1>
    <div style="display: block; margin-left: 80px; margin-top: 40px;">
      <span style="font-size: 24px">X is <span style="color: #42b983;">{{answer.x}}</span></span>
    </div>
    <div style="display: block; margin-left: 80px; margin-top: 40px;">
      <span style="font-size: 24px">Y is <span style="color: #42b983;">{{answer.y}}</span></span>
    </div>
    <div style="display: block; margin-left: 80px; margin-top: 40px;">
      <span style="font-size: 24px">Z is <span style="color: #42b983;">{{answer.z}}</span></span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const localStorage = window.localStorage;
const getXYZ = () => axios.get('http://localhost:3000/getXYZ').then(res => res);
// eslint-disable-next-line no-console
export default {
  name: 'GetXYZ',
  data() {
    return {
      question: '',
      answer: {},
    };
  },

  methods: {
    getXYZ() {
      const localData = localStorage.getItem('getxyz');
      const now = new Date();
      if (localData) {
        const item = JSON.parse(localData);
        if (now.getTime() > item.expire) {
          localStorage.removeItem('getxyz');
        } else {
          this.question = item.question;
          this.answer = item.answer;
          return;
        }
      }
      getXYZ().then((result) => {
        if (result.data.status) {
          const cache = {
            ...result.data,
            expire: (now.getTime() + 300000),
          };
          localStorage.setItem('getxyz', JSON.stringify(cache));
          this.question = result.data.question;
          this.answer = result.data.answer;
        }
      });
    },
  },

  mounted() {
    this.getXYZ();
  },
};
</script>

<style scoped>

</style>
