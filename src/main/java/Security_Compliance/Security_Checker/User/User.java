package Security_Compliance.Security_Checker.User;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class User {
    @Id
    @GeneratedValue
    private long Id;
    private String name;
    private String role;

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    User(){}

    User(Long id, String name, String role) {
        this.name = name;
        this.role = role;
        this.Id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof User)) {
            return false;
        }
        User user = (User) o;
        return Objects.equals(this.Id, user.Id) && Objects.equals(this.name, user.name)
                && Objects.equals(this.role, user.role);
    }
}
