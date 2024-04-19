import ChatBot from 'react-simple-chatbot';
import './ChatBot.css'

const Chat = () => {
    return (
        <div>
            <ChatBot
                steps={[
                    {
                        id: '1',
                        message: 'Hola, muchas gracias por escoger mi hall para guardar tu maleta. Estaré encantada de cuidar de tu equipaje. Mi teléfono es 634723485.',
                        trigger: '2',
                    },
                    {
                        id: '2',
                        user: true,
                        end: true,
                    },
                ]}
            />
        </div>
    )
}

export default Chat