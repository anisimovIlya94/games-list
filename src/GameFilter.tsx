import type { PropsWithChildren } from 'react';
import { PlatformField } from './StoreProvider/fetchGamesList';
import { Select } from 'antd';

interface GameFilterProps<T> {
    value: T
    onChange: (value: T) => void
}

export function GameFilter<T>(props: PropsWithChildren<GameFilterProps<T>>) {
    const { value, onChange } = props;

 return (
    <Select id="" value={value} onChange={onChange}>
    </Select>
 );
}