# Closest Pair Heuristic

- The closest pair heuristic builds a tour incrementally by always choosing the shortest available connection between unconnected or partially connected points, while avoiding premature cycles that would prevent completing the tour.

## Steps

- First start with all the points unconnected.

- Calculate the distance between all the points, e.g given points A, B, C, D, the distances are AB, AC, AD, BC, BD, CD.

- Sort all the pairs by increasing distance.

- Iterate through the sorted list and:
    1. Add a pair edge if it doesn't:
        - create a cycle (unless it's the final edge completing the tour).
        - Cause any point to have more than two connections (i.e maintain that all nodes will have degree <= 2).

- Continue until a single cycle that visits all points is formed (a Hamilton cycle).


# Notes on Hamiltonian Cycle

- The graph given in a Hamiltonian cycle must be connected, if it is not connected, then it is not possible.

- It is a NP hard problem.

- Taking the starting point of another vertex does not necessary mean it will result in a new cycle.

- If there is an articulation point in a graph, then hamiltonian cycle is not possible. An articulation point is a point that connects to other points in such a way that in order to leave the points you visited when you passed through that point, you have to revisit that point or pivot point. Since in a Hamiltonian cycle, you have to visit all the points only once, therefore a graph that has an articulation point cannot have a hamilton cycle.

- Hamiltonian cycles cannot exist when you have pendant vertices, that is vartices that are not connected to any other vertice in the graph.

## Adjacency Matrix

- An adjacency matrix is a way to represent a graph using a square matrix to show which vertices (nodes) are connected to which.

- Given a graph with n vertices, the adjacency matrix is an n X n matrix A where:

    1. A[i][j] = 1 (or a weight W) if there is an edge from vertex i to vertex j.
    2. A[i][j] = 0 if no edge exists between vertex i and vertex j.


- When performing backtracking, you can perform depth first search and breath first search.



