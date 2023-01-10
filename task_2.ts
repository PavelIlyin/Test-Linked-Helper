import { getQueue } from '../test/data';
import ExecutorExt from '../test/ExecutorExt';
import { IExecutor } from './Executor';
import ITask from './Task';

export default async function run(executor: IExecutor, queue: AsyncIterable<ITask>, maxThreads = 0) {
    maxThreads = Math.max(0, maxThreads);
    /**
     * Код надо писать сюда
     * Тут что-то вызываем в правильном порядке executor.executeTask для тасков из очереди queue
     */


  const asyncTask: number[] = [];
  const noPair: number[] = [];
  const arrStack: number[] = [];

  for (const taskCurrent of queue) {
    arrStack.push(taskCurrent.targetId);
  }

  function duplicate(arr: number[]) {
    interface NumberMap { [s: string]: number[] }
    const object: NumberMap = {
    };

    const result = [];

    arr.forEach(item => {
      if (!object[item]) {
        object[item] = [];
      }
      object[item].push(item);
    });

    for (const prop of Object.keys(object)) {
      if (object[prop].length >= 2) {
        result.push({ [prop]: object[prop] });
      }
    }
    return result;
  }
  console.log(duplicate(arrStack));

}

(async () => {
  const queue = getQueue();
  const executor = new ExecutorExt('bla', queue);
  executor.start();
  await run(executor, queue);
  executor.stop();
})();