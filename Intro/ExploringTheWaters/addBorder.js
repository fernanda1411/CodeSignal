/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]

*/

function addBorder(picture) {
  var topFrame = '*'.repeat(picture[0].length);
  picture.unshift(topFrame);

  for (var i = 0; i < picture.length; i++) {
      picture[i] = picture[i] + '*';
      picture[i] = '*' + picture[i];
  }

  var bottomFrame = '*'.repeat(picture[1].length);
  picture.push(bottomFrame);

  return picture;
}
