
export const types = {
    login: '[Auth] Login',
    logout: '[Auth] Logout',

    //types para uiReducer
    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Remove Error',

    //types para el bloque del boton de login
    uiStartLoading: '[UI] Start Loading',
    uiFinishLoading:'[UI] Finish Loading',

    //types para las notas
    notesAddNew: '[Notes] New note',
    notesActive: '[Notes] Set active note',
    notesLoad: '[Notes] Load notes',
    notesUpdated: '[Notes] Update note',
    notesFileUrl: '[Notes] Update image url',
    notesDelete: '[Notes] Delete note',
    notesLogoutCleaning: '[Notes] Logout Cleaning'
}