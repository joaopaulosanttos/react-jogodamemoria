import * as C from './styles';

type Props = {
    lebal: string;
    value: string;
}

export const InfoItem = ({ lebal, value }: Props) => {
    return (
        <C.Container>
            <C.Lebal>{lebal}</C.Lebal>
            <C.Value>{value}</C.Value>
        </C.Container>
    );
};

