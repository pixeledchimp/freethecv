import { PresentationActions } from './Actions';

// Props interface
export interface PresentationState {
  introduction: string;
  subtitle: string;
  title: string;
  photo?: string;
}

export const initialPresentationComponentState: PresentationState = {
  title: 'Default Title',
  subtitle: 'Default subtitle',
  introduction:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam euismod efficitur. Donec at risus molestie, pulvinar sem eu, tincidunt quam. Donec nisl dolor, ultricies quis velit nec, consectetur elementum elit. Nullam pellentesque malesuada odio, sed eleifend velit scelerisque at. Nunc elementum laoreet magna et elementum. Maecenas ac bibendum orci. Quisque ac massa porttitor leo dictum tristique',
  photo: '',
};

export const PresentationActionsReducer = (
  state = initialPresentationComponentState,
  action: PresentationActions
) => {
  switch (action.type) {
    case 'PRESENTATION_UPDATE_TITLE':
      return { ...state, title: action.title || '' };

    case 'PRESENTATION_UPDATE_SUBTITLE':
      return { ...state, subtitle: action.subtitle || '' };

    case 'PRESENTATION_UPDATE_INTRODUCTION':
      return { ...state, introduction: action.introduction || '' };

    case 'PRESENTATION_UPDATE_PHOTO':
      return { ...state, photo: action.photo || '' };

    default:
      return state;
  }
};
