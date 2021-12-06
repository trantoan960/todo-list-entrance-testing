import { reactive } from "@vue/reactivity";

const state = reactive<{
  isActive: boolean;
  message: string;
}>({
  isActive: false,
  message: "",
});

export default function useFlash() {
  function showFlash(content: string) {
    state.isActive = true;
    state.message = content;
    setTimeout(() => {
      state.isActive = false;
    }, 3000);
  }

  return {
    showFlash,
    state,
  };
}
