// importamos la funcion que vamos a testear
import {
  registerFirebase,
  registerAndLoginGoogle,
  loginFirebase,
  updaterUserProfile,
  emailVerification,
  singOutFirebase,
  getCurrentUser,
} from '../src/lib/firebaseUser';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signOut,
} from '../src/lib/firebaseLibraries';

jest.mock('../src/lib/firebaseLibraries.js');

describe('registerFirebase', () => {
  it('Debería llamar la función una vez con los argumentos especificados(email and password)', () => {
    const result = registerFirebase('lucero@gmail.com', '123456');
    expect(createUserWithEmailAndPassword.mock.calls.length).toBe(1);
    expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('lucero@gmail.com');
    expect(createUserWithEmailAndPassword.mock.calls[0][2]).toBe('123456');
  });
  it('Debería actualizar nombre de usuario', () => {
    const resultUser = updaterUserProfile('Lucero Victorio Poma');
    expect(updateProfile).toHaveBeenCalled();
    expect(updateProfile.mock.calls[0][0]).toEqual(getAuth().currentUser);
    expect(updateProfile.mock.calls[0][1]).toEqual({ displayName: 'Lucero Victorio Poma' });
  });
});

describe('registerAndLoginGoogle', () => {
  it('Debería retornar una función', () => {
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

describe('loginFirebase', () => {
  it('Debería llamar la función una vez con los argumentos especificados(email and password)', () => {
    const resultLogin = loginFirebase('lucero@gmail.com', '123456');
    expect(signInWithEmailAndPassword.mock.calls.length).toBe(1);
    expect(signInWithEmailAndPassword.mock.calls[0][1]).toBe('lucero@gmail.com');
    expect(signInWithEmailAndPassword.mock.calls[0][2]).toBe('123456');
  });
});

describe('emailVerification', () => {
  it('Debería retornar una función', () => {
    expect(emailVerification()).toEqual(sendEmailVerification());
  });
  it('Debería enviar un correo de verificacion', () => {
    const resultEmail = emailVerification();
    expect(sendEmailVerification).toHaveBeenCalled();
    expect(sendEmailVerification.mock.calls[0][0]).toEqual(getAuth().currentUser);
  });
});

describe('singOut', () => {
  it('Debería retornar una función', () => {
    expect(singOutFirebase()).toEqual(signOut());
  });
  it('No deberia cerrar sesion', () => {
    singOutFirebase()
      .catch(() => {
        expect(singOutFirebase).toEqual('cerrar sesion');
      });
  });
});

describe('getCurrentUser', () => {
  it('Debería retornar un objeto', () => {
    expect(getCurrentUser()).toEqual();
  });
});
