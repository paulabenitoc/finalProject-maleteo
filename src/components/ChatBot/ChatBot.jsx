import ChatBot from 'react-simple-chatbot';

const Chat = () => {
    return (
        <div>
            <ChatBot
                steps={[
                    {
                        id: '1',
                        message: 'Hola, muchas gracias por escoger mi hall para guardar tu maleta. Estaré encantada de cuidar de tu equipaje.',
                        trigger: '2',
                    },
                    {
                        id: '2',
                        user: true,
                        trigger: '3',
                    },
                    {
                        id: '3',
                        end: true,
                    },
                ]}
            />
        </div>
    )
}

export default Chat