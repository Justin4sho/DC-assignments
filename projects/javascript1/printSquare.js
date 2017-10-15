function box (width, height) {
  console.log('*'.repeat(width));
  height = height - 2;
  for (var i = 0; i <= height;i++){
    console.log('*'.repeat(width));
  }
  console.log('*'.repeat(width));
}
box(10,5);
