# DS Catalog - Product & Category Management System

A full-stack catalog application for managing products and categories with Spring Boot backend and Angular frontend.

## 📋 Project Status

**Current Development Stage:** 🟡 **Backend Implementation (Alpha)**

### ✅ Completed Features

- **Backend API (Spring Boot 3.1.1 + Java 17)**

  - ✅ REST API with two main resources: Products and Categories
  - ✅ Full CRUD operations for both entities
  - ✅ Pagination support for list endpoints
  - ✅ JPA/Hibernate with H2 in-memory database (test profile)
  - ✅ PostgreSQL configuration ready (production profile)
  - ✅ API documentation with SpringDoc OpenAPI 3
  - ✅ Sample data seeding (12 categories, 25 products)
  - ✅ DTO pattern implementation

- **Frontend Structure (Angular 16)**
  - ✅ Basic project scaffolding
  - ✅ Component structure (screens, services, models)
  - ✅ Routing configuration
  - ✅ TailwindCSS integration
  - ✅ Angular Material components

### 🚧 In Progress / Not Implemented

- ❌ Frontend API integration (services not connected to backend)
- ❌ Frontend UI implementation (components are placeholders)
- ❌ Authentication & Authorization
- ❌ Error handling & validation
- ❌ Unit and integration tests
- ❌ Production database setup
- ❌ Docker containerization

### ⚠️ Known Issues

- Accessing root URL (`http://localhost:8080`) shows Whitelabel Error Page (404) - **This is expected behavior**
- No frontend-backend integration yet
- Frontend is not production-ready

## 🛠️ Technology Stack

### Backend

- **Java 17**
- **Spring Boot 3.1.1**
  - Spring Data JPA
  - Spring Web
  - Spring Validation
- **H2 Database** (development/test)
- **PostgreSQL** (production-ready, not configured)
- **SpringDoc OpenAPI 3** (API documentation)
- **Hibernate 6.2.5**
- **Maven** (build tool)

### Frontend

- **Angular 16.2**
- **TypeScript 5.1**
- **RxJS 6.6**
- **Angular Material 16.2**
- **TailwindCSS 3.3**
- **FontAwesome**

## 🚀 Getting Started

### Prerequisites

- Java 17 or higher
- Node.js 16+ and npm
- Maven 3.6+ (or use included Maven wrapper)
- Git

### Backend Setup & Run

1. **Navigate to backend directory:**

   ```bash
   cd backend
   ```

2. **Run the application (using Maven wrapper):**

   ```bash
   # Windows
   ./mvnw.cmd spring-boot:run

   # Linux/Mac
   ./mvnw spring-boot:run
   ```

   Or with installed Maven:

   ```bash
   mvn spring-boot:run
   ```

3. **Verify the server is running:**
   - Server starts on: `http://localhost:8080`
   - Profile active: `test` (H2 in-memory database)
   - Startup time: ~3-4 seconds

### Frontend Setup & Run

1. **Navigate to frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm start
   # or
   ng serve
   ```

4. **Access the application:**
   - Frontend: `http://localhost:4200`
   - **Note:** Frontend is not yet functional - components are scaffolding only

## 📡 API Endpoints

### Base URL

```
http://localhost:8080
```

### Available Endpoints

#### Categories

| Method | Endpoint           | Description                     | Response            |
| ------ | ------------------ | ------------------------------- | ------------------- |
| GET    | `/categories`      | List all categories (paginated) | `Page<CategoryDTO>` |
| GET    | `/categories/{id}` | Get category by ID              | `CategoryDTO`       |
| POST   | `/categories`      | Create new category             | `CategoryDTO`       |
| PUT    | `/categories/{id}` | Update category                 | `CategoryDTO`       |
| DELETE | `/categories/{id}` | Delete category                 | `204 No Content`    |

#### Products

| Method | Endpoint         | Description                   | Response           |
| ------ | ---------------- | ----------------------------- | ------------------ |
| GET    | `/products`      | List all products (paginated) | `Page<ProductDTO>` |
| GET    | `/products/{id}` | Get product by ID             | `ProductDTO`       |
| POST   | `/products`      | Create new product            | `ProductDTO`       |
| PUT    | `/products/{id}` | Update product                | `ProductDTO`       |
| DELETE | `/products/{id}` | Delete product                | `204 No Content`   |

### Pagination Parameters

```
?page=0&size=20&sort=name,asc
```

## 🧪 Testing the API

### 1. Using H2 Console (Database Viewer)

Access the H2 console to view/query the database directly:

- URL: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:testdb`
- Username: `sa`
- Password: _(leave empty)_

### 2. Using Swagger/OpenAPI UI

Access interactive API documentation:

- URL: `http://localhost:8080/swagger-ui.html`
- OpenAPI JSON: `http://localhost:8080/api-docs`

### 3. Using cURL Examples

**Get all categories:**

```bash
curl http://localhost:8080/categories
```

**Get all products:**

```bash
curl http://localhost:8080/products
```

**Get product by ID:**

```bash
curl http://localhost:8080/products/1
```

**Create a category:**

```bash
curl -X POST http://localhost:8080/categories \
  -H "Content-Type: application/json" \
  -d '{"name":"New Category"}'
```

**Create a product:**

```bash
curl -X POST http://localhost:8080/products \
  -H "Content-Type: application/json" \
  -d '{
    "name":"New Product",
    "price":99.99,
    "description":"Product description",
    "imgUrl":"https://example.com/image.jpg",
    "categoryId":1
  }'
```

### 4. Using Postman or Insomnia

Import the OpenAPI spec from: `http://localhost:8080/api-docs`

## 📊 Database Schema

### Entities

**Categories Table:**

```sql
- Id (bigint, primary key, auto-increment)
- Name (varchar 255)
- CreatedAt (timestamp)
- UpdatedAt (timestamp)
```

**Products Table:**

```sql
- Id (bigint, primary key, auto-increment)
- Name (varchar 255)
- Description (varchar 512)
- Price (double)
- ImgUrl (varchar 255)
- CategoryId (bigint, foreign key)
- CreatedAt (timestamp)
- UpdatedAt (timestamp)
```

### Sample Data

The application seeds the database with:

- **12 Categories:** Books, Electronics, Computers, Magazines, etc.
- **25 Products:** Various PC gaming products with prices and descriptions

## 🏗️ Project Structure

```
java-spring-angular/
├── backend/
│   ├── src/main/java/info/gezielcarvalho/dscatalog/
│   │   ├── DscatalogApplication.java      # Main Spring Boot application
│   │   ├── entities/                      # JPA entities (Product, Category)
│   │   ├── dto/                           # Data Transfer Objects
│   │   ├── repositories/                  # Spring Data JPA repositories
│   │   ├── services/                      # Business logic layer
│   │   └── resources/                     # REST Controllers
│   ├── src/main/resources/
│   │   ├── application.properties         # Main config (active profile: test)
│   │   ├── application-test.properties    # H2 database config
│   │   └── schema.sql                     # Database seed data
│   └── pom.xml                            # Maven dependencies
│
└── frontend/
    ├── src/app/
    │   ├── components/                    # Reusable UI components
    │   ├── screens/                       # Page components (category, product, home)
    │   ├── services/                      # API service layer (not connected)
    │   ├── models/                        # TypeScript interfaces
    │   └── directives/                    # Custom Angular directives
    └── package.json                       # npm dependencies
```

## ⚙️ Configuration

### Backend Configuration Files

**application.properties** (main config):

```properties
spring.profiles.active=test
spring.jpa.open-in-view=false
spring.jpa.hibernate.naming.physical-strategy=...PhysicalNamingStrategyStandardImpl
springdoc.api-docs.path=/api-docs
```

**application-test.properties** (H2 config):

```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.h2.console.enabled=true
spring.jpa.show-sql=true
```

### Switching to PostgreSQL (Production)

1. Create `application-prod.properties`
2. Configure PostgreSQL connection
3. Change active profile in `application.properties`

## 🐛 Troubleshooting

### Whitelabel Error Page (404)

**This is normal!** The backend has no root mapping. Use these instead:

- `/categories` - Categories endpoint
- `/products` - Products endpoint
- `/h2-console` - Database console
- `/swagger-ui.html` - API documentation

### Port Already in Use

```bash
# Windows - kill process on port 8080
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:8080 | xargs kill -9
```

### Build Errors

```bash
# Clean and rebuild
cd backend
./mvnw clean install
```

## 🔜 Next Steps (Roadmap)

1. **Connect Frontend to Backend**

   - Implement HTTP services in Angular
   - Add environment configuration for API base URL
   - Create functional UI components

2. **Add Authentication**

   - Spring Security integration
   - JWT token-based auth
   - User roles and permissions

3. **Error Handling**

   - Global exception handler
   - Custom error responses
   - Frontend error interceptors

4. **Testing**

   - Unit tests (JUnit, Mockito)
   - Integration tests
   - Angular component tests

5. **Production Deployment**
   - PostgreSQL configuration
   - Docker containers
   - CI/CD pipeline

## 📚 References

- [DevSuperior - Nelio Alves](https://www.youtube.com/@DevSuperior)
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Angular Documentation](https://angular.io/docs)
- [SpringDoc OpenAPI 3](https://springdoc.org/)

## 📝 License

This is a learning project based on DevSuperior course materials.

---

**Last Updated:** November 11, 2025
