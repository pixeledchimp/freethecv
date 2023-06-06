// Props interface
export interface PresentationState {
    introduction: string
    subtitle: string
    title: string
    photo?: string
}

export const initialPresentationComponentState: PresentationState = {
    title: 'Default Title',
    subtitle: 'Default subtitle',
    introduction:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam euismod efficitur. Donec at risus molestie, pulvinar sem eu, tincidunt quam. Donec nisl dolor, ultricies quis velit nec, consectetur elementum elit. Nullam pellentesque malesuada odio, sed eleifend velit scelerisque at. Nunc elementum laoreet magna et elementum. Maecenas ac bibendum orci. Quisque ac massa porttitor leo dictum tristique',
    photo: '',
}
