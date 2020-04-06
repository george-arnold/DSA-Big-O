let num = 0;
const towerOfHanoi = function (height, start, end, mid) {
  if (height >= 1) {
    // Move a tower of height-1 to the mid peg, using the end
    towerOfHanoi(height - 1, start, mid, end);

    // Log the movement
    num += 1;
    console.log(num, "moved ", start, " to ", end);

    // Move the tower of `height-1` from the `mid` to the `end` using the `start`.
    towerOfHanoi(height - 1, mid, end, start);
  }
  return;
};

// If you are given 5 disks, how do the rods look like after 7 recursive calls?
//  3 are in C, 2 are in A
//How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
//7, 15, 31

//
