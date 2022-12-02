import React from 'react';
import { Palette } from 'react-bootstrap-icons';

import { ThemePaletteProps } from '../TodoList.interface';

export default function ThemePalette(props: ThemePaletteProps) {
    const { paletteOpen, themeColors, togglePaletteOpen, handleChangeColor } = props;

    return (
        <>
            <div className='icon palette'>
                <Palette onClick={togglePaletteOpen}/>
            </div>
        </>
    );
}