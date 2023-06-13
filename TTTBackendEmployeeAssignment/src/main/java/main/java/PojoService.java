package main.java;

import java.util.List;

public class PojoService {
    private List<EmploeePojo> emploeePojoList;

    public PojoService(List<EmploeePojo> emploeePojoList) {
        this.emploeePojoList = emploeePojoList;
    }
    public void displayEmployee()
    {
        for(EmploeePojo e:emploeePojoList) {
            System.out.println(e.getId());
            System.out.println(e.getName());
            System.out.println(e.getDesignation());
        }
    }
    public void displayById(int id)
    {
        for(EmploeePojo e:emploeePojoList) {
            if(e.getId()==id)
            {
                System.out.println(e.getId());
                System.out.println(e.getName());
                System.out.println(e.getDesignation());

            }
        }
    }
}
