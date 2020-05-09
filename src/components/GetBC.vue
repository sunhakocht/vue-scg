<template>
  <div id="body" style="padding: 20px">
    <h1 style="margin-left: 40px;">{{question}}</h1>
    <div style="display: block; margin-left: 80px; margin-top: 40px;">
      <span style="font-size: 24px">B is <span style="color: #42b983;">{{answer.B}}</span></span>
    </div>
    <div style="display: block; margin-left: 80px; margin-top: 40px;">
      <span style="font-size: 24px">C is <span style="color: #42b983;">{{answer.C}}</span></span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const localStorage = window.localStorage;
const getBC = () => axios.get('http://localhost:3000/getBC').then(res => res);
// eslint-disable-next-line no-console
export default {
  name: 'GetBC',
  data() {
    return {
      question: '',
      answer: {},

    };
  },

  methods: {
    getBC() {
      const localData = localStorage.getItem('getbc');
      const now = new Date();
      if (localData) {
        const item = JSON.parse(localData);
        if (now.getTime() > item.expire) {
          localStorage.removeItem('getbc');
        } else {
          this.question = item.question;
          this.answer = item.answer;
          return;
        }
      }
      getBC().then((result) => {
        if (result.data.status) {
          const cache = {
            ...result.data,
            expire: (now.getTime() + 300000),
          };
          localStorage.setItem('getbc', JSON.stringify(cache));
          this.question = result.data.question;
          this.answer = result.data.answer;
        }
      });
    },
  },

  mounted() {
    this.getBC();
  },
};
</script>

<style scoped>

</style>
