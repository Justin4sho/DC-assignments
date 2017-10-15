function box (width, height) {
  console.log('*'.repeat(width));
  spaces = width - 2;
  spaces = ' '.repeat(spaces);
  height = height - 2;
  for (var i = 0; i <= height;i++){
    console.log('*' + spaces + '*');
  }
  console.log('*'.repeat(width));
}
box(10,5);
