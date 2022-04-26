// importamos la funcion que vamos a testear
import { registerFirebase } from '../src/lib/firebaseUser';

describe('registerFirebase', () => {
  it('debería ser una función', () => {
    expect(typeof registerFirebase).toBe('function');
  });
});
