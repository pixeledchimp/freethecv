export interface UILayoutHideFormAction {
    type: 'UILAYOUT_TOGGLE_FORM'
    hide: boolean
}

export const UILayoutHideFormActionCreator: (
    hide: boolean
) => UILayoutHideFormAction = (hide) =>
    ({
        type: 'UILAYOUT_TOGGLE_FORM',
        hide,
    } as const)

export type UILayoutHideFormActions = ReturnType<
    typeof UILayoutHideFormActionCreator
>
