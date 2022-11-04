import {GeneticAlgorithm, getValues, scoreFn} from "../../src/codewars/binaryGenericAlgorithm";

const instance = new GeneticAlgorithm();

describe("binaryGenericAlgorithm", () => {
  test("should get chromosome values", async () => {
    const chromosome = "0010010111";
    const values = getValues(chromosome);

    expect(values).toEqual([19, 12960]);
  });

  test("should generate a chromosome", async () => {
    const chromosome = instance.generate(10);

    expect(chromosome.length).toEqual(10);
  });

  test("should score a chromosome", async () => {
    const baseChromosome = instance.generate(10);
    const baseFn = scoreFn(baseChromosome);

    const score1 = baseFn(baseChromosome);
    const score2 = baseFn(instance.generate(9));

    expect(score1).toEqual(1);
    expect(score2).not.toEqual(1);
  });

  test("should crossover two chromosomes", async () => {
    const chromosome1 = instance.generate(10);
    const chromosome2 = instance.generate(10);
    const crossoverChromosomes = instance.crossover(chromosome1, chromosome2);

    expect(crossoverChromosomes[0]).not.toEqual(chromosome1);
    expect(chromosome1.length).toEqual(10);

    expect(crossoverChromosomes[1]).not.toEqual(chromosome2);
    expect(chromosome2.length).toEqual(10);
  });

  test("should mutate a chromosome", async () => {
    const mutationProbability = 0.5;
    const chromosome = instance.generate(10);
    const mutatedChromosome = instance.mutate(chromosome, mutationProbability);

    expect(chromosome).not.toEqual(mutatedChromosome);
  });

  test("should select a chromosome", async () => {
    const chromosome = instance.generate(10);
    const baseFn = scoreFn(chromosome);
    const population = [chromosome, instance.generate(10)];
    const fitnesses = population.map(value => baseFn(value));
    const selection = instance.select(population, fitnesses);

    expect(selection).toEqual(chromosome);
  });

  test("should find the closest chromosome", async () => {
    const chromosome = instance.generate(35);
    const baseFn = scoreFn(chromosome);
    const output = instance.run(baseFn, 35, 0.6, 0.002, 100, 100);

    expect(chromosome).toEqual(output);
  });
});