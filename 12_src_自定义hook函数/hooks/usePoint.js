import {
  onMounted,
  onBeforeUnmount,
  reactive,
} from "vue";

export default function usePoint() {
    let point = reactive({
        x: 0,
        y: 0,
      })
      //  方法
      const savePont = event => {
        console.log(event.pageX, event.pageY);
        point.x = event.pageX
        point.y = event.pageY
      }
  
      onMounted(() => {
        console.log("---onMounted---");
        window.addEventListener("click", savePont);
      });
   
      onBeforeUnmount(() => {
        console.log("---onBeforeUnmount---");
        window.removeEventListener("click", savePont);
      });
      return point
}