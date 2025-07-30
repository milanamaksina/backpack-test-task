import { ref, reactive } from "vue";

export function useTooltip(width = 160, offsetX = 16, offsetY = 10) {
  const visible = ref(false);
  const text = ref("");
  const position = reactive({ x: 0, y: 0 });
  let animationFrameId = 0;

  function moveTooltip(e: MouseEvent) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(() => {
      const rightSpace = e.pageX + offsetX + width < window.innerWidth;

      position.x = rightSpace ? e.pageX + offsetX : e.pageX - width - offsetX;
      position.y = e.pageY + offsetY;
    });
  }

  function showTooltip(e: MouseEvent, content: string) {
    text.value = content;
    visible.value = true;
    moveTooltip(e);
    document.addEventListener("mousemove", moveTooltip);
  }

  function hideTooltip() {
    visible.value = false;
    document.removeEventListener("mousemove", moveTooltip);
    cancelAnimationFrame(animationFrameId);
  }

  return { visible, text, position, showTooltip, hideTooltip };
}
