import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/store';
import './Presentation.scss';
import {
  PresentationUpdateIntroductionActionCreator,
  PresentationUpdatePhotoActionCreator,
  PresentationUpdateSubtitleActionCreator,
  PresentationUpdateTitleActionCreator,
} from './Actions';

/**
 * Form
 * @returns JSX.Element
 */
export const Presentationform = () => {
  const dispatch = useDispatch();

  /**
   * Updates the title
   * @param e {React.KeyboardEvent<HTMLInputElement>}
   */
  const updateTitle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    dispatch(PresentationUpdateTitleActionCreator(e.currentTarget.value));
  };

  /**
   * Updates the subtitle
   * @param e {React.KeyboardEvent<HTMLInputElement>}
   */
  const updateSubtitle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    dispatch(PresentationUpdateSubtitleActionCreator(e.currentTarget.value));
  };

  /**
   * Updates the image box background
   * @param e {React.DragEvent<HTMLDivElement>}
   */
  const updatePhoto = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('dragging');
    e.preventDefault();
    e.stopPropagation();

    const reader = new FileReader();

    reader.addEventListener('load', () => {
      // Base64 Data URL 👇
      dispatch(PresentationUpdatePhotoActionCreator(reader.result as string));
    });

    let imageFile = e.dataTransfer.files[0];
    reader.readAsDataURL(imageFile);
  };

  /**
   * Updates the class of the drop zone when hovering
   * @param e {React.DragEvent<HTMLDivElement>}
   */
  const updateClass = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.add('dragging');
  };

  /**
   * Prevents the content of the input field to be changed
   * @param e {React.KeyboardEvent<HTMLInputElement>}
   */
  const keepStill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.value = state.photo as string;
  };

  const updateIntroduction = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(
      PresentationUpdateIntroductionActionCreator(e.currentTarget.value)
    );
  };

  const state = useSelector((appstate: AppState) => appstate.presentation);

  return (
    <div className='presentation-form'>
      <div className='field-block'>
        <div className='label'>Photo:</div>
        <input
          className='drop-zone'
          onDrop={updatePhoto}
          onDragEnter={updateClass}
          placeholder={state.photo}
          onKeyUp={keepStill}
        />
      </div>

      <div className='field-block'>
        <div className='label'>Title:</div>
        <input
          type='text'
          placeholder='Set the title'
          defaultValue={state.title}
          onKeyUp={updateTitle}
        />
      </div>

      <div className='field-block'>
        <div className='label'>Subtitle:</div>
        <input
          type='text'
          placeholder='Set the subtitle'
          defaultValue={state.subtitle}
          onKeyUp={updateSubtitle}
        />
      </div>

      <div className='field-block'>
        <div className='label'>Introduction:</div>
        <textarea
          placeholder='Set the Introduction'
          defaultValue={state.introduction}
          onChange={updateIntroduction}
        />
      </div>
    </div>
  );
};

/**
 * View
 * @returns JSX.Element
 */
export const Presentation = () => {
  const state = useSelector((appstate: AppState) => appstate.presentation);
  return (
    <div className='presentation'>
      <div
        className='photo'
        style={{ backgroundImage: `url(${state.photo})` }}
      ></div>
      {state.title && <h1>{state.title}</h1>}
      {state.subtitle && <span>{state.subtitle}</span>}
      {state.introduction && <p>{state.introduction}</p>}
    </div>
  );
};
