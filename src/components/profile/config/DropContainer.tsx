import styled, {css} from 'styled-components'

const dragActive = css`
border-color: rgba(0,150,0,0.4)
`
const dragReject = css`
border-color:#E57878;
`
export const DropContainer = styled.div.attrs({
    className: "dropzone"

})`
border: 1px dashed #ddd;
border-radius: 4px;
cursor:pointer;
transition: heigth 0.2s ease;

${props=>props.isDragActive && dragActive};

${props=>props.isDragReject && dragReject};
`;

const messageColors = {
    default: '#999',
    error: '#E57878',
    success: ' rgba(0,150,0,0.4)'
}
export const UploadMessage =  styled.p`
display: flex;
color: ${props => messageColors[props.type || 'default']};
justify-content: center;
align-items: center;
padding: 14px 0;
`;