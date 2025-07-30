import { ref, computed, onMounted, onUnmounted, watchEffect } from "vue";

export function useCooldownTimer(targetMs?: number) {
  const now = ref(Date.now());
  const remainingSeconds = computed(() =>
    targetMs ? Math.max(0, Math.ceil((targetMs - now.value) / 1000)) : 0
  );

  let intervalId: number | null = null;

  const startTimer = () => {
    if (intervalId) return;

    intervalId = window.setInterval(() => {
      now.value = Date.now();
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  watchEffect(() => {
    if (remainingSeconds.value === 0) {
      stopTimer();
    }
  });

  onMounted(() => {
    if (targetMs && targetMs > Date.now()) startTimer();
  });

  onUnmounted(() => {
    stopTimer();
  });

  return {
    remainingSeconds,
    startTimer,
    stopTimer,
  };
}
