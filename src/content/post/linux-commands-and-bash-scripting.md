---
title: "The Most Popular Linux Bash Commands"
description: "Linux Bash commands are hugely useful things. You can use some of these common commands in MacOS/Windows. We will see  the most common commands."
publishDate: "04 July 2023"
updatedDate: "14 August 2023"
coverImage:
  src: "/src/assets/bash.png"
  alt: "Linux/Gnu Bash"
tags: ["linux", "bash", "scripts"]
---

Linux Bash commands are hugely useful things. You can use some of these common commands in MacOS or Windows.
We will see today the most common commands and their meaning and what their achieved.

## ls Commands

The `ls` command in Bash is used to list directory contents. Here are some common usages:

- `ls`: List files and directories in the current directory.
- `ls -a`: List all entries including hidden files starting with ‘.’.
- `ls -l`: Use a long listing format.
- `ls -la`: Combine -l and -a to list detailed file information including hidden files.
- `ls -lh`: Provide a long listing with human-readable file sizes.
- `ls -lt`: Sort by modification time, newest first.
- `ls -ltr`: Same as -lt but in reverse order.
- `ls -ld`: List directory entries instead of contents.
- `ls -R`: List subdirectories recursively.

## cd Commands

The `cd` command in Bash is used to change the current directory. Here’s a quick guide on how to use it:

- `cd`: Changes to the home directory of the current user.
- `cd [directory]`: Changes to the specified directory.
- `cd ..`: Moves up one directory level.
- `cd -`: Changes to the previous directory.

## pwd Commands

The `pwd` command in Bash stands for “print working directory.” It displays the full pathname of the current working directory. Here’s how you can use it:

- `pwd`: Prints the absolute path of the current working directory.
- `pwd -L`: Prints the logical path of the current working directory, including symbolic links.
- `pwd -P`: Prints the physical path, without resolving symbolic links.

  You can also use the $PWD environment variable to get the current directory, like so:

```
echo $PWD
```

## mkdir Commands

The `mkdir` command in Bash is used to create new directories. Here’s how you can use it:

- `mkdir [directory_name]`: Creates a new directory with the specified name.
- `mkdir -p [path/to/directory]`: Creates a directory and, if necessary, all parent directories in the specified path.
- `mkdir -m [mode] [directory_name]`: Creates a new directory with the specified permissions.

For example, to create a directory named “NewFolder”:

```
mkdir NewFolder
```

To create multiple directories at once, such as “MyFiles” and “MyMusic”:

```
mkdir MyFiles MyMusic
```

And to create a nested directory structure, like “MyFiles/FamilyPhotos/2021”, using the -p flag:

```
mkdir -p MyFiles/FamilyPhotos/2021
```

## rmdir Commands

The `rmdir` command in Bash is used to remove empty directories. Here’s how you can use it:

- `rmdir [directory_name]`: Removes an empty directory.
- `rmdir -p [path/to/directory]`: Removes a directory and its parent directories if they are empty.
- `rmdir --ignore-fail-on-non-empty [directory_name]`: Suppresses the error message when trying to remove a non-empty directory, but does not remove it.
- `rmdir -v [directory_name]`: Provides verbose output, showing each directory as it is removed.

For example, to remove an empty directory named “EmptyFolder”:

```
rmdir EmptyFolder
```

To remove a nested directory structure like “a/b/c”, where “a”, “b”, and “c” are all empty:

```
rmdir -p a/b/c
```

And to remove an empty directory named “EmptyFolder” with verbose output:

```
rmdir -v EmptyFolder
```

Remember, **rmdir can only remove empty directories**. To remove directories that contain files, you would use `rm -r [directory_name]`

## rm Commands

The rm command in Bash is used to remove files and directories. Here’s a quick guide on how to use it:

- `rm [file]`: Removes a single file.
- `rm -i [file]`: Prompts for confirmation before removing each file.
- `rm -f [file]`: Forcefully removes a file without prompting, even if it’s write-protected.
- `rm -r [directory]`: Recursively removes a directory and its contents.
- `rm -rf [directory]`: Forcefully removes a directory and its contents without prompting.

For example, to remove a file named “example.txt”:

```
rm example.txt
```

To remove multiple files, like “file1.txt” and “file2.txt”:

```
rm file1.txt file2.txt
```

And to remove a directory named “old_files” along with all its contents:

```
rm -r old_files
```

## touch Commands

The touch command in Bash is used to create a new empty file or to update the timestamps of an existing file.

For example, to create a new empty file named example.txt:

```
touch example.txt
```

## cp Commands

The `cp` command in Bash is used to copy files and directories. Here’s a quick guide on how to use it:

- `cp [source] [destination]`: Copies a file from the source to the destination.
- `cp -i [source] [destination]`: Prompts for confirmation before overwriting.
- `cp -r [source_directory] [destination_directory]`: Recursively copies a directory.
- `cp -u [source] [destination]`: Copies only if the source is newer than the destination.
- `cp -v [source] [destination]`: Provides verbose output.
- `cp -a [source] [destination]`: Preserves the specified attributes such as directory structure, file attributes, and symbolic links.
- `cp --remove-destination [file] [destination]`: Removes each existing destination file before attempting to open it.

For example, to copy a file named file.txt to backup.txt:

```
cp file.txt backup.txt
```

To copy all files from the directory photos to photos_backup with verbose output:

```
cp -vr photos photos_backup
```

## mv Commands

The `mv` command in Bash is used for moving and renaming files and directories. Here’s how you can use it:

- `mv [source] [destination]`: Moves a file or directory from the source to the destination.
- `mv -i [source] [destination]`: Prompts for confirmation before overwriting the destination.
- `mv -u [source] [destination]`: Moves only if the source is newer than the destination or if the destination is missing.
- `mv -v [source] [destination]`: Provides verbose output, showing what is being moved.
- `mv -n [source] [destination]`: Does not overwrite an existing file at the destination.
- `mv -f [source] [destination]`: Forcefully moves the file or directory, overwriting the destination without prompting.
  For example, to move a file named document.txt to a directory named backup:

```
mv document.txt backup/
```

To rename a file from old_name.txt to new_name.txt:

```
mv old_name.txt new_name.txt
```

And to move multiple files to a directory, you can use:

```
mv file1.txt file2.txt file3.txt target_directory/
```

## chmod Commands

The `chmod` command in Bash is used to change the file mode bits of a file or directory, which control the permissions. Here’s how you can use it:

- `chmod [options] mode file`: Changes the permissions of a file or directory.
- `chmod u+x file`: Adds execute permission for the user (owner) of the file.
- `chmod g+w file`: Adds write permission for the group that owns the file.
- `chmod o-r file`: Removes read permission from others (not the owner or the group).
- `chmod a=r file`: Sets read permission for everyone and removes all other permissions.
- `chmod 755 file`: Sets read and execute permissions for everyone and write permission for the owner (common for scripts).
- `chmod -R 644 directory`: Recursively sets read and write permissions for the owner and read permission for others on all files in the directory.
  The mode can be specified in a symbolic form (like u+x) or as an octal number (like 755). The symbolic form uses `u` for user, `g` for group, o for others, and `a` for all. Permissions are represented by `r` for read, `w` for write, and `x` for execute.

For example, to make a script executable for the owner:

```
chmod u+x script.sh
```

To set read and write permissions for the owner and read permission for the group and others:

```
chmod 644 document.txt
```
