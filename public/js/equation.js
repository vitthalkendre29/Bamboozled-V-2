const equationProblems = [
    {
        id: 1,
        title: "Linear Equation Solver",
        description: "Write a program to solve a system of linear equations using Cramer's rule: ax + by = c and dx + ey = f.",
        example: "Input: a=2, b=3, c=8, d=1, e=1, f=4 → Output: x=1, y=2"
    },
    {
        id: 2,
        title: "Quadratic Equation Solver",
        description: "Write a program to find the roots of a quadratic equation ax² + bx + c = 0 using the quadratic formula.",
        example: "Input: a=1, b=-5, c=6 → Output: x=2, x=3"
    },
    {
        id: 3,
        title: "Matrix Multiplication",
        description: "Write a program to multiply two matrices A and B and return the resulting matrix C.",
        example: "Input: A=[[1,2],[3,4]], B=[[5,6],[7,8]] → Output: C=[[19,22],[43,50]]"
    },
    {
        id: 4,
        title: "Differential Equation",
        description: "Write a program to solve the first-order ordinary differential equation dy/dx = f(x,y) using the Euler method.",
        example: "Input: dy/dx = x + y, y(0) = 1, step size = 0.1, interval [0,1] → Output: y(1) ≈ 4.7"
    }
];


export default equationProblems;