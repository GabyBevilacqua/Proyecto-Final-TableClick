const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			tables: [],
			items: [], // Aquí almacenaremos los ítems
			registerUser: []
		},
		actions: {
			// Ejemplo de función
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			// Obtener mensajes desde el backend
			getMessage: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
					const data = await resp.json();
					setStore({ message: data.message });
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			// Cambiar color de demo HAY QUE BORRAR ESTO
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			},

			// ACCIONES DE REGISTRO DE USUARIO NUEVO restRegister.js

			registerUser: async (formData) => {
                try {
                    const response = await fetch("https://jubilant-zebra-v6grjw6xrp973wp6j-3001.app.github.dev/api/register", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(formData)
                    });

                    if (response.ok) {
                        const data = await response.json();
                        console.log("Usuario registrado exitosamente:", data);
                        return true;
                    } else {
                        console.error("Error al registrar el usuario");
                        return false;
                    }
                } catch (error) {
                    console.error("Error al registrar el usuario:", error);
                    return false;
                }
            },
//--------------------------------------------------------------------------------
			// ACCIONES DE LA PAGINA DE menuItems.js

			// Agregar una nueva mesa
			addTable: (tableName) => {
				const store = getStore();
				setStore({ tables: [...store.tables, tableName] });
			},

			// Agregar un nuevo ítem
			addItem: (item) => {
				const store = getStore();
				setStore({ items: [...store.items, item] }); // Añade el ítem al estado global
				
			}
		}
	};
};

export default getState;