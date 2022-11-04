// https://www.codewars.com/kata/526f35b9c103314662000007

/**
 * A class that tries to find the closest number matching a score.
 * For more information visit the link above as it contains all the description for this problem.
 */
export class GeneticAlgorithm {
  /**
   * Generates a chromosome in the form of a binary number
   * @param length {number} number of bits that the chromosome will contain
   * @returns {string} a binary number matching the given length
   */
  generate(length: number): string {
    return Array(length).fill(undefined).map(() => Math.floor(Math.random() * 2)).join("");
  }

  /**
   * Use the roulette wheel selection algorithm to select a chromosome from a given population
   * @param population {Array<string>} array of chromosomes
   * @param fitnesses {Array<string>} array of scores with matching index for each chromosome in population
   * @returns {string} a chromosome selected randomly where the score influence the odds of being selected
   */
  select(population: string[], fitnesses: number[]): string {
    const fitnessSum = fitnesses.reduce((sum, fitness) => sum + fitness);
    const rand = Math.random();
    let probability = 0;

    for (let idx = 0; idx < fitnesses.length; idx++) {
      const currentFitness = probability + fitnesses[idx] / fitnessSum;

      if (rand > probability && rand <= currentFitness)
        return population[idx];

      probability = currentFitness;
    }

    const randIdx = Math.random() * (fitnesses.length - 1);
    return population[Math.round(randIdx)];
  }

  /**
   * Mutates the bits of a chromosome that matches the given probability
   * @param chromosome {string} the chromosome to mutate
   * @param p {number} probability for a bit to mutate
   * @returns {number} a new chromosome
   */
  mutate(chromosome: string, p: number): string {
    return Array.from(chromosome).map(value => Math.random() <= p ? value === "0" ? "1" : "0" : value).join("");
  }

  /**
   * Mix the chromosome at a random bit, mixing the first part of the first chromosome with the second part of the second chromosome and vice-versa
   * @param chromosome1 {string} first chromosome to mix
   * @param chromosome2 {string} second chromosome to mix
   * @returns {Array<string>} an array containing two chromosomes that have been mixed between them
   */
  crossover(chromosome1: string, chromosome2: string): Array<string> {
    const splitIdx = Math.round(Math.random() * (chromosome1.length - 1));
    const crossover1 = chromosome1.substring(0, splitIdx) + chromosome2.substring(splitIdx);
    const crossover2 = chromosome2.substring(0, splitIdx) + chromosome1.substring(splitIdx);

    return [crossover1, crossover2];
  }

  /**
   * Runs a given number of iterations to find the chromosome closest to 1
   * @param fitness {Function} a scoring function used to get the fitness for each chromosome
   * @param length {number} the length of the chromosomes to generate
   * @param p_c {number} probability of a crossover
   * @param p_m {number} probability of a bit mutation
   * @param iterations {number} number of iterations to run
   * @param populationSize {number} size of the population pool
   * @returns {string} the chromosome with the closest score to 1
   */
  run(fitness: (chromosome: string) => number, length: number, p_c: number, p_m: number, iterations = 100, populationSize = 50): string {
    let currentPopulation = Array(populationSize).fill(undefined).map(() => this.generate(length));
    let newPopulation: Array<string> = [];
    let fitnesses: Array<number> = [];
    let maxFitness = 0;

    while (iterations) {
      newPopulation = [];
      fitnesses = currentPopulation.map(fitness);
      maxFitness = Math.max(...fitnesses);

      if (maxFitness === 1) break;

      while (newPopulation.length < currentPopulation.length) {
        const selection = [this.select(currentPopulation, fitnesses), this.select(currentPopulation, fitnesses)];
        const crossover = Math.random() < p_c ? this.crossover(selection[0], selection[1]) : selection;
        const mutation = crossover.map(chromosome => this.mutate(chromosome, p_m));

        newPopulation.push(...mutation);
      }

      currentPopulation = newPopulation;
      iterations--;
    }

    return currentPopulation[fitnesses.indexOf(maxFitness)];
  }
}

/**
 * Auxiliar function to evaluate a chromosome pair
 * @param chromosome {string} a chromosome to analize
 * @returns {Array<number>} an array with two elements, the first one is the sum of all zero bit indexes, the second one is the product of all the one bit indexes
 */
export const getValues = (chromosome: string): Array<number> => Array
  .from(chromosome)
  .reduce(
    (acc, value, index) => value === "0"
      ? [acc[0] + (index + 1), acc[1]]
      : [acc[0], (acc[1] === 0 ? 1 : acc[1]) * (index + 1)],
    [0, 0],
  );

/**
 * Curry function to get the score, comparing an expected chromosome against a given chromosome
 * @param expected {string} expected chromosome used as a base to get the score
 * @returns {Function(string) => number} a function to be used to get the score, this function gets the difference between the expected
 * chromosome and the given chromosome, the score goes from 0 to 1, being 0 the lowest score and 1 the optimal score
 */
export const scoreFn = (expected: string) => {
  const values = getValues(expected);

  return (chromosome: string) => {
    const chromosomeValues = getValues(chromosome);
    const fitness = Math.sqrt(
      Math.pow(chromosomeValues[0] - values[0], 2) +
      Math.pow(chromosomeValues[1] - values[1], 2),
    );

    return 1 / (1 + fitness);
  };
};