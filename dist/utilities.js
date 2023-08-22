export const randomColor = () => {
  const colors = ['#8ac5fc', '#c2b0f2', '#ed966a', '#ea8672', '#86f984', '#c2f28c', '#f2d78c', '#fcec76', '#f9c4a4', '#f98077', '#f9c193', '#f2c598', '#cd92ef', '#df9af4'];

  const i = Math.floor(Math.random() * colors.length);

  return colors[i];
}
  
export const Initials = (name) => {
  let initials = name.split(' ');
  
  if (initials.length > 1) {
    initials = initials.shift().charAt(0) + initials.pop().charAt(0);
  } else {
    initials = name.substring(0, 2);
  }
  
  return initials.toUpperCase();
};