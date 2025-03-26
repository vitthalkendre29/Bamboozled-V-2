const paragraphProblems = [
    {
        id: 5,
        title: "Text Analysis",
        description: "Write a program that analyzes a text passage to count the frequency of each word, identify the most common words, and calculate the average word length. The program should be case-insensitive and ignore punctuation. Additionally, implement a feature to identify sentences with more than 20 words, as these may be candidates for simplification. Your solution should efficiently handle large texts and provide a summary report with the following metrics: total word count, unique word count, average word length, most frequent words (top 5), longest word, and a list of potentially complex sentences.",
    },
    {
        id: 6,
        title: "Data Compression Algorithm",
        description: "Design and implement a lossless data compression algorithm that can efficiently compress and decompress text files. Your algorithm should achieve a balance between compression ratio and processing speed. The implementation should include both compression and decompression functions, handle various types of input texts (including binary data represented as text), and provide metrics about the compression performance. Documentation should explain the approach, the time and space complexity of your algorithm, and compare its performance against standard compression algorithms like Huffman coding or LZW compression. Bonus points for implementing multiple compression techniques and allowing the user to choose between them based on their priorities.",
    },
    {
        id: 7,
        title: "Path Finding Algorithm",
        description: "Implement a pathfinding algorithm to find the shortest path between two points in a 2D grid that contains obstacles. The grid is represented as a matrix where 0 indicates a free cell and 1 indicates an obstacle. The algorithm should efficiently find the shortest path from a starting position to a target position, avoiding all obstacles. Your implementation should include at least two different pathfinding algorithms (e.g., A*, Dijkstra's, BFS) and compare their performance in terms of execution time and path optimality. The solution should visualize the grid, the obstacles, and the computed path. Additionally, implement a feature that allows for diagonal movement with a customizable cost factor.",
    },
    {
        id: 8,
        title: "Natural Language Processing",
        description: "Develop a program that performs sentiment analysis on text input, classifying it as positive, negative, or neutral. Your solution should use a combination of lexicon-based approaches and basic machine learning techniques. The program should preprocess the text (removing stopwords, stemming, tokenization), extract relevant features, and apply a classification algorithm. Include a training mode where the system can learn from labeled examples and improve its accuracy over time. Your implementation should provide not just the overall sentiment score but also identify the most influential words or phrases that contributed to the classification. Additionally, create a simple mechanism to handle negations and intensifiers in the text, as they can significantly alter the sentiment.",
    }
];

export default paragraphProblems;