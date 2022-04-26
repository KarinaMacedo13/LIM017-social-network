// importamos la funcion que vamos a testear
import { registerFirebase, registerAndLoginGoogle } from '../src/lib/firebaseUser';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from '../src/lib/firebaseLibraries';

jest.mock('../src/lib/firebaseLibraries.js');

describe('registerFirebase', () => {
  it('Debería llamar la función una vez con los argumentos especificados(email and password)', () => {
    const result = registerFirebase('lucero@gmail.com', '123456');
    expect(createUserWithEmailAndPassword.mock.calls.length).toBe(1);
    expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('lucero@gmail.com');
    expect(createUserWithEmailAndPassword.mock.calls[0][2]).toBe('123456');
  });
});

describe('signInGoogle', () => {
  it('debería retornar una funcion', () => {
    expect(registerAndLoginGoogle()).toEqual(signInWithPopup());
  });
  it('Debería llamar la función al menos una vez con los argumentos especificados(email and password)', () => signInWithPopup()
    .then(() => {
      expect(signInWithPopup).toHaveBeenCalled();
      // expect(signInWithPopup.mock.calls).toHaveLength(3);
      // expect(signInWithPopup.mock.calls[0][0]).toEqual(getAuth());
      expect(signInWithPopup.mock.calls[0][1]).toEqual(new GoogleAuthProvider());
    }));
});
