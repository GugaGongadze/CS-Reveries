# In this reverie Soso and Guga tried to solve [the percolation problem](http://coursera.cs.princeton.edu/algs4/assignments/percolation.html).

## **Guga's approach** uses a single 2D array to represent the system and recursively checks its percolation status by checking if its neighboring cells are percolated and also maintains an array of already checked cells.
## *This approach sometimes hangs on 10+ size grids when the size of the array of already checked cells grows and is passed in as an argument in a recursive function.*
### Possible improvements:
* Reduce the number of recursive function calls by eliminating edge cases beforehand;
* save the information about already passed cells as a string instead of an array.


## **Soso's approach** uses an array of indices and an array of tree lengths. It is very efficient even on 20+ grid size systems.
## *Its percolation threshold needs to be tested.*
