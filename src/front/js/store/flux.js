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
			selectedItems: [], // Aquí almacenaremos los ítems seleccionados
			registerUser: [],
			selectedMenu: [],  // almacenamos el menu seleccionado
			selectedTable: [], // almacenamos la mesa seleccionada
			authToken: null, // Añadir token de autenticación
			user: null // Añadir informacion del usuario
		},
		actions: {
			// Ejemplo de función
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			// Obtener mensajes desde el backend
			getMessage: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "api/hello");
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

			// Acción para registrar un usuario
			registerUser: async (formData) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/register", {
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

			//accion para taer todos los usuarios

			getAllUsers: async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/user", {
						method: "GET",
						headers: {
							"Content-Type": "application/json"
						}
					});

					if (response.ok) {
						const data = await response.json();
						setStore({ registerUser: data });

						console.log("Datos de usuarios cargados exitosamente:", data);
						return data;
					} else {
						console.error("Error al cargar los datos de usuarios");
						return null;
					}
				} catch (error) {
					console.error("Error al cargar los datos de usuarios:", error);
					return null;
				}
			},

			// Acción para obtener los datos de un usuario por ID
			getUserById: async (userId) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "${userId}", {
						method: "GET",
						headers: {
							"Content-Type": "application/json"
						}
					});

					if (response.ok) {
						const data = await response.json();
						setStore({ user: data });
						console.log("Datos del usuario cargados exitosamente:", data);
						return data;
					} else {
						console.error("Error al cargar los datos del usuario");
						return null;
					}
				} catch (error) {
					console.error("Error al cargar los datos del usuario:", error);
					return null;
				}
			},

			// Acción para actualizar los datos de un usuario

			updateUser: async (userId, formData) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "${userId}", {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(formData)
					});

					if (response.ok) {
						const data = await response.json();
						setStore({ user: data });
						console.log("Usuario actualizado exitosamente:", data);
						return true;
					} else {
						console.error("Error al actualizar el usuario");
						return false;
					}
				} catch (error) {
					console.error("Error al actualizar el usuario:", error);
					return false;
				}
			},

			// Acción para eliminar un usuario por ID
			deleteUser: async (userId) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "${userId}", {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					});

					if (response.ok) {
						console.log("Usuario eliminado exitosamente");
						return true;
					} else {
						console.error("Error al eliminar el usuario");
						return false;
					}
				} catch (error) {
					console.error("Error al eliminar el usuario:", error);
					return false;
				}
			},

			//------Accion para cargar la seleccion de la mesa---------------------------------

			addSelectedTable: (table) => {
				const store = getStore();
				setStore({ selectedTable: table }); // Añade el ítem al estado global

			},

			//------Accion para cargar la seleccion del menu---------------------------------

			addSelectedMenu: (menu) => {
				const store = getStore();
				setStore({ selectedMenu: menu }); // Añade el ítem al estado global

			},

			//------Accion para cargar la cantidad de los produstos en el pedido---------------------------------

			addSelectedItems: (item) => {
				const store = getStore();
				setStore({ selectedItems: [...store.selectedItems, item] }); // Añade el ítem al estado global

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

			},

			//ACCIONES DE LA PAGINA DE preLogin.js

			loginUser: async (username, password) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/login", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ username, password })
					});

					if (response.ok) {
						const data = await response.json();
						setStore({ authToken: data.token, user: data.user });
						console.log("Login successful!", data);
						return true; // Indica éxito en el inicio de sesión 
					} else {
						console.log("Login failed!");
						return false; // Indica fracaso en el inicio de sesión 
					}
				} catch (error) {
					console.error("Error logging in", error);
					return false;
				}
			}
		}
	};
};

export default getState;