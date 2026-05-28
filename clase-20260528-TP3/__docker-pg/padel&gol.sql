-- Conectar a la base de datos 'padel&gol'
\c tienda;

-- Crear la tabla 'canchas'
CREATE TABLE canchas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    deporte VARCHAR(100),
    precio NUMERIC(10, 2),
    capacidad NUMERIC(10, 2),
    disponible BOOLEAN
);

CREATE TABLE reservas (
    id SERIAL PRIMARY KEY,
    cancha VARCHAR(100),
    usuario VARCHAR(100),
    fecha VARCHAR(20),
    hora VARCHAR(10),
    estado VARCHAR(20)
);

-- Insertar 10 canchas
INSERT INTO canchas (nombre, deporte, precio, capacidad, disponible) VALUES
    ('La Bombonera del Barrio', 'Fútbol', 18500, 10, true),
    ('Camp Nou de la Esquina', 'Fútbol', 35000, 22, false),
    ('Estadio del Sol', 'Fútbol', 22000, 14, true),
    ('Predio El 10', 'Fútbol', 18000, 10, true),
    ('Cancha Los Eucaliptos', 'Fútbol', 16500, 10, false),
    ('Padel Point', 'Pádel', 9500, 4, true),
    ('La Pared de Cristal', 'Pádel', 11000, 4, false),
    ('Tie Break Arena', 'Pádel', 10000, 4, false),
    ('Volea Master', 'Pádel', 8500, 4, true),

-- Insertar reservas
INSERT INTO reservas (cancha, usuario, fecha, hora, estado) VALUES
    ('La Bombonera del Barrio', 'Carlos Rodríguez', '2024-05-10', '19:00', 'Confirmada'),
    ('Camp Nou de la Esquina', 'Federico Gómez', '2024-05-10', '21:00', 'Confirmada'),
    ('Estadio del Sol', 'Martín Sosa', '2024-05-11', '18:00', 'Confirmada'),
    ('Predio El 10', 'Julián Álvarez', '2024-05-11', '20:00', 'Confirmada'),
    ('Padel Point', 'Lucía Fernández', '2024-05-10', '17:30', 'Confirmada'),
    ('Tie Break Arena', 'Esteban Quito', '2024-05-12', '10:00', 'Confirmada'),
