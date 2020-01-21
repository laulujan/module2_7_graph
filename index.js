//crear clase grafo
class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  //AÑADIR VERTICE
  addVertex(v) {
    this.AdjList.set(v, []);
  }

  //añadir arista
  addEdge(v, w) {
    this.AdjList.get(v).push(w);

    //since graph is undirected add an edge from w to v also
    this.AdjList.get(w).push(v);
  }

  printGraph() {
    //get all the vertices
    var get_keys = this.AdjList.keys();
    //[{"A",[{"A","B"},{"A","C"}]}, {"B"}, {"C"}, {"D"}, {"E"}, {"F"},]

    //iterate over the vertices
    for (var i of get_keys) {
      //great the correspondency adjacency list of vertex
      var get_values = this.AdjList.get(i);
      var conc = "";

      //iterate over the adjacency list concatenate the values into string
      for (var j of get_values) conc += j + " ";
      //print the vertex and its adjacency list
      console.log(i + " -> " + conc);
    }
  }
}

var g = new Graph(9);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for(var i= 0; i < vertices.length; i++){
    g.addVertex(vertices[i]);
}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'G');
g.addEdge('B', 'C');
g.addEdge('B', 'E');
g.addEdge('B', 'I');
g.addEdge('C', 'F');
g.addEdge('C', 'I');
g.addEdge('D', 'G');
g.addEdge('E', 'G');
g.addEdge('E', 'H');
g.addEdge('F', 'I');
g.addEdge('G', 'H');
g.addEdge('H', 'I');


g.printGraph();
