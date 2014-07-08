package com.comsysto.examples.rest;

import com.comsysto.examples.domain.Priority;
import com.comsysto.examples.domain.Task;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

/**
 *
 */
@Controller
@RequestMapping(value = "rest/task", consumes = "*/*")
public class TaskController {

    private Map<String, Task> tasks = Collections.synchronizedMap(new LinkedHashMap<String, Task>());

    public TaskController() {
        addTask(new Task(UUID.randomUUID().toString(), "Learn JavaScript", Priority.DEFAULT, new Date()));
        addTask(new Task(UUID.randomUUID().toString(), "Learn AngularJS", Priority.DEFAULT, new Date()));
        addTask(new Task(UUID.randomUUID().toString(), "Learn TypeScript", Priority.DEFAULT, new Date()));
    }

    @RequestMapping(value = "get", method = RequestMethod.GET)
    @ResponseBody
    public List<Task> getTasks() {
        return new ArrayList<Task>(tasks.values());
    }


    @RequestMapping(value = "add", method = RequestMethod.POST)
    @ResponseBody
    public List<Task> addTask(@RequestBody Task task) {
        tasks.put(task.getId(), task);
        return getTasks();
    }

    @RequestMapping(value = "delete/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public List<Task> removeTask(@PathVariable("id") String id) {
        tasks.remove(id);
        return getTasks();
    }
}
