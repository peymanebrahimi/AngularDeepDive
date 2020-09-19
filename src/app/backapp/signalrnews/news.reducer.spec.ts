import { newsReducer, initialNewsState } from './news.reducer';

describe('News Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = newsReducer(initialNewsState, action);

      expect(result).toBe(initialNewsState);
    });
  });
});
