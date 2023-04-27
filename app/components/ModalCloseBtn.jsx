import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';

export default function ModalCloseBtn({ onClose, size=40 }) {
    return (
        <TouchableWithoutFeedback onPress={onClose}>
            <Ionicons name='close-outline' size={size} />
        </TouchableWithoutFeedback>
    );
}
