const defaultOptions = {
    behavior: "smooth",
    block: "center",
    inline: "center",
  };

export const scrollIntoView = (
    id,
    scrollIntoViewOptions = defaultOptions,
  ) => {
    const element = document.getElementById(id);
    
    if (!element) {
      console.warn("Element is not defined");
      return;
    }
  
    element.scrollIntoView({
      ...defaultOptions,
      block: scrollIntoViewOptions.block,
      inline: scrollIntoViewOptions.inline,
      behavior: "smooth"
    });

  };
  
  export const scrollToTop = (behavior = "auto") => {
    window.scrollTo({ top: 0, behavior });
  };