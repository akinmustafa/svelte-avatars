<script>import { randomColor, Initials } from "./utilities.js";
export let style = "";
export let src = "";
export let alt = "Avatar";
export let name = "Avatar";
export let initials = "";
export let bgColor = "gainsboro";
export let textColor = "black";
export let size = "50px";
export let borderRadius = "50%";
export let square = false;
export let randomBgColor = false;
export let boxShadow = "";
let imageFail = false;
let imageLoading = true;
const background = randomBgColor ? randomColor() : bgColor;
const abbr = initials || Initials(name);
const abbrLength = abbr.length;
</script>
  
<div aria-label={name} class="wrapper" style="{style} --src:{src}; --bgColor:{background}; --textColor:{textColor}; --size:{size}; --borderRadius:{square ? 0 : borderRadius}; --abbrLength:{abbrLength}; --boxShadow:{boxShadow}">
  {#if src && !imageFail}
    <div class={imageLoading ? 'imageLoading' : ''}>
      <img alt={alt} class={`innerImage`} {src} on:error={() => (imageFail = true)} on:load={() => (imageLoading = false)}/>
    </div>
  {:else}
    <div class="innerInitials">{abbr}</div>
  {/if}
</div>
  
<style>
  .wrapper {
    position: relative;
    width: var(--size);
    height: var(--size);
  }
  .innerImage,
  .innerInitials,
  .imageLoading {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: var(--borderRadius);
    box-shadow: var(--boxShadow);
  }
  .innerInitials {
    background-color: var(--bgColor);
    color: var(--textColor);
    line-height: var(--size);
    text-align: center;
    font-size: calc(var(--size) / (var(--abbrLength) + 0.5));
  }
  .imageLoading {
    background-color: var(--bgColor);
  }
</style>