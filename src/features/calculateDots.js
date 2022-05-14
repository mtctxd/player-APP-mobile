const calculateDots = (name, modifier = 21) => {
  const check = name.length - modifier;

  return check > 0 ? check : 11;
};

export default calculateDots;
