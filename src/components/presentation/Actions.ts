// Actions
/**
 * UPDATE TITLE
 */
export interface PresentationUpdateTitleAction {
    type: 'PRESENTATION_UPDATE_TITLE';
    title: string;
}

export const PresentationUpdateTitleActionCreator: (
    title: string
) => PresentationUpdateTitleAction = (title) =>
    ({
        type: 'PRESENTATION_UPDATE_TITLE',
        title,
    } as const);

/**
 * UPDATE SUBTITLE
 */
export interface PresentationUpdateSubtitleAction {
    type: 'PRESENTATION_UPDATE_SUBTITLE';
    subtitle: string;
}

export const PresentationUpdateSubtitleActionCreator: (
    subtitle: string
) => PresentationUpdateSubtitleAction = (subtitle) =>
    ({
        type: 'PRESENTATION_UPDATE_SUBTITLE',
        subtitle,
    } as const);

/**
 * UPDATE INTRODUCTION
 */
export interface PresentationUpdateIntroductionAction {
    type: 'PRESENTATION_UPDATE_INTRODUCTION';
    introduction: string;
}

export const PresentationUpdateIntroductionActionCreator: (
    subtitle: string
) => PresentationUpdateIntroductionAction = (introduction) =>
    ({
        type: 'PRESENTATION_UPDATE_INTRODUCTION',
        introduction,
    } as const);

/**
 * UPDATE PHOTO
 */
export interface PresentationUpdatePhotoAction {
    type: 'PRESENTATION_UPDATE_PHOTO';
    photo: string;
}

export const PresentationUpdatePhotoActionCreator: (
    photo: string
) => PresentationUpdatePhotoAction = (photo) => ({
    type: 'PRESENTATION_UPDATE_PHOTO',
    photo,
});

export type PresentationActions =
    | ReturnType<typeof PresentationUpdateTitleActionCreator>
    | ReturnType<typeof PresentationUpdateSubtitleActionCreator>
    | ReturnType<typeof PresentationUpdateIntroductionActionCreator>
    | ReturnType<typeof PresentationUpdatePhotoActionCreator>;
