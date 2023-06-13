
import main.java.EmploeePojo;
import main.java.PojoService;
import org.springframework.context.ApplicationContext;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.ArrayList;
import java.util.List;


public class Main {
public static void main(String arr[])
{
    ApplicationContext ac=new ClassPathXmlApplicationContext("empbean.xml");
    EmploeePojo p1=(EmploeePojo) ac.getBean("employee1");
   System.out.println(p1.getDesignation());
    EmploeePojo p2=(EmploeePojo) ac.getBean("employee2");
    System.out.println(p2.getDesignation());
    List<EmploeePojo> emplist=new ArrayList<EmploeePojo>();
    emplist.add(p1);
    emplist.add(p2);

    PojoService p=new PojoService(emplist);
    p.displayById(1000);
    p.displayEmployee();
}
}