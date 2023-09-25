const axios = require('axios');

const fetchData = async (id) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  console.log(results); // this gives result {id: 1, todo: "Hello World"}, that we mocked down . so won't be making API call to jsonplaceholder
  return results.data;
};

const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

it('mock callback', () => {
  const mockCallback = jest.fn((x) => 42 + x);

  forEach([0, 1], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(2);

  expect(mockCallback.mock.calls[0][0]).toBe(0);

  expect(mockCallback.mock.calls[1][0]).toBe(1);

  expect(mockCallback.mock.results[0].value).toBe(42);

  expect(mockCallback.mock.results[1].value).toBe(43);
});

it('mock return value', () => {
  const mock = jest.fn();

  mock
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce('Should work');

  const results = mock();
  const results2 = mock();
  const results3 = mock();

  expect(results).toBe(true);
  expect(results2).toBe(false);
  expect(results3).toBe('Should work');
});

// NO any API call will be made, just mock axios
it('mock axios', async () => {
  jest.spyOn(axios, 'get').mockReturnValueOnce({
    // First parameter is an object and second parameter is a method "GET", "POST" ...
    data: {
      id: 1,
      todo: 'Hello World',
    },
  });
  const results = await fetchData(1);

  expect(results.todo).toBe('Hello World');
});
